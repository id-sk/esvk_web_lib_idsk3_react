import classNames from 'classnames';
import { PrimaryButton, Progress } from '../../Atoms';
import { CloudUploadIcon } from '../../../svgIcons/File';
import { AddIcon } from '../../../svgIcons/Content';
import React, { ReactNode, useCallback, useImperativeHandle, useState } from 'react';
import { FileRejection, useDropzone } from 'react-dropzone';
import { CloseIcon } from '../../../svgIcons/Navigation';
import { ErrorIcon } from '../../../svgIcons/Alert';
import { format } from 'date-fns';
import { formatBytes } from '../../../utils';
import {
  DocumentIcon,
  ExcelSpreadsheetIcon,
  FolderIcon,
  GenericIcon,
  ImageIcon,
  PdfDocumentIcon,
  PowerpointPresentationIcon,
  PresentationIcon,
  SpreadsheetIcon,
  WordDocumentIcon
} from '../../../svgIcons/FileTypes';

export interface DropZoneRefProps {
  value: File[];
}

export interface DropZoneProps extends React.AllHTMLAttributes<HTMLDivElement> {
  inGroup?: boolean;
  dropzoneTitle?: string;
  filesTitle?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  variant?: 'active' | 'inactive';
  icon?: ReactNode;
  errorMessage?: ReactNode;
  percent?: string;
  progressWidth?: string;
  progress?: boolean;
  key?: string;
  children?: ReactNode;
  maxSize?: number;
  progressEmptyColor?: string;
  progressFillingColor?: string;
  fileInputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export function DropZoneAcceptedFile({ ...props }) {
  return (
    <div className="dropzone__file" key={props.key}>
      <div className="dropzone__file-container">{props.children}</div>
      <div className="dropzone-accepted-file__close-button">
        <button onClick={props.onCancel}>
          <CloseIcon className="dropzone-accepted-file__close-icon" />
        </button>
      </div>
    </div>
  );
}

export function DropZoneRejectedFile({ ...props }: DropZoneProps) {
  const [visibility, setVisibility] = useState('dropzone-rejected-file');
  return (
    <div className={visibility} key={props.key}>
      <div className="dropzone__file-container">
        <ErrorIcon className="dropzone-rejected-file__icon" />
        <div className="dropzone-rejected-file__container">
          <div className="dropzone-rejected-file__name">{props.children}</div>
          <p className="dropzone-rejected-file__error-message">{props.errorMessage}</p>
        </div>
      </div>

      <div className="dropzone-rejected-file__close-button">
        <button
          onClick={() => {
            setVisibility('hidden');
          }}
        >
          <CloseIcon className="dropzone-rejected-file__close-icon" />
        </button>
      </div>
    </div>
  );
}

const DropZone = React.forwardRef<DropZoneRefProps, DropZoneProps>(({ icon, ...props }, ref) => {
  const [files, setFiles] = useState<File[]>([]);
  const [filesRejected, setFilesRejected] = useState<FileRejection[]>([]);

  useImperativeHandle(ref, () => {
    return { value: files };
  });
  const onDrop = useCallback((acceptedFiles, fileRejections) => {
    setFiles((f) => [...f, ...acceptedFiles]);
    setFilesRejected((f) => [...f, ...fileRejections]);
  }, []);
  const { getRootProps, getInputProps, isDragAccept } = useDropzone({
    onDrop,
    maxSize: props.maxSize
  });
  const getExtension = (fileName: string): string => {
    if (!fileName) {
      return '';
    }
    const fileParts = fileName.split('.');
    return fileParts[fileParts.length - 1];
  };
  const documentExtensions = ['txt', 'html', 'htm', 'dot', 'xml', 'rtf', 'dotm'];
  const excelExtensions = ['xls', 'xlt', 'xlsm', 'xlsb', 'xlsx', 'xltx', 'xltm'];
  const folderExtensions = ['zip'];
  const imageExtensions = ['jpg', 'jpeg', 'gif', 'tiff', 'png', 'svg'];
  const pdfExtensions = ['pdf'];
  const powerpointPresentationExtensions = ['pptx'];
  const presentationExtensions = ['ppt'];
  const spreadsheetExtensions = ['ods', 'sxc', 'dif'];
  const wordExtensions = ['doc', 'docx'];
  const renderFileIcon = (f: File) => {
    if (documentExtensions.includes(getExtension(f.name))) {
      return <DocumentIcon className="dropzone__icon" />;
    } else if (excelExtensions.includes(getExtension(f.name))) {
      return <ExcelSpreadsheetIcon className="dropzone__icon" />;
    } else if (folderExtensions.includes(getExtension(f.name))) {
      return <FolderIcon className="dropzone__icon" />;
    } else if (imageExtensions.includes(getExtension(f.name))) {
      return <ImageIcon className="dropzone__icon" />;
    } else if (pdfExtensions.includes(getExtension(f.name))) {
      return <PdfDocumentIcon className="dropzone__icon" />;
    } else if (powerpointPresentationExtensions.includes(getExtension(f.name))) {
      return <PowerpointPresentationIcon className="dropzone__icon" />;
    } else if (presentationExtensions.includes(getExtension(f.name))) {
      return <PresentationIcon className="dropzone__icon" />;
    } else if (spreadsheetExtensions.includes(getExtension(f.name))) {
      return <SpreadsheetIcon className="dropzone__icon" />;
    } else if (wordExtensions.includes(getExtension(f.name))) {
      return <WordDocumentIcon className="dropzone__icon" />;
    } else {
      return <GenericIcon className="dropzone__icon" />;
    }
  };

  const dropzoneClasses = classNames({
    dropzone__container: !isDragAccept,
    'dropzone__container--active': isDragAccept,
    'dropzone__container--inactive': props.variant == 'inactive'
  });
  const infoClasses = classNames({
    'dropzone__file-size-date': !props.progress,
    'dropzone__file-size-date--hidden': props.progress
  });
  const progressClasses = classNames('dropzone__file-progress-container', {
    hidden: !props.progress
  });

  console.log(files);

  return (
    <div className="dropzone">
      <h3>{props.dropzoneTitle}</h3>
      <div className={dropzoneClasses} {...getRootProps()}>
        <CloudUploadIcon className="dropzone__upload-icon" />
        <p className="dropzone__subtitle">{props.subtitle}</p>
        <p className="dropzone__description">{props.description}</p>
        {
          <div className="dropzone__primary-button">
            {props.variant == 'inactive' ? (
              <PrimaryButton
                className="dropzone__button"
                icon={<AddIcon className="dropzone__icon" />}
                disabled={true}
              >
                {props.buttonText}
              </PrimaryButton>
            ) : (
              <PrimaryButton
                className="dropzone__button"
                icon={<AddIcon className="dropzone__icon" />}
                disabled={false}
              >
                <input {...getInputProps({ ...props.fileInputProps })} />
                {props.buttonText}
              </PrimaryButton>
            )}
          </div>
        }
      </div>

      <div>
        {!!props.filesTitle && !!files.length && <h4>{props.filesTitle}</h4>}
        <div className="dropzone__files">
          {!!files.length &&
            files.map((f, index) => (
              <DropZoneAcceptedFile
                key={f.name}
                onCancel={() =>
                  setFiles((p) => [...p.slice(0, index), ...p.slice(index + 1, p.length)])
                }
              >
                <div className="dropzone__file-icon">{renderFileIcon(f)}</div>
                <div className="dropzone__file-info">
                  <div className="dropzone__file-name">{f.name}</div>
                  <div className="dropzone__file-info-progress">
                    <div className={infoClasses}>
                      <div className="dropzone__file-date">
                        {`${format(f.lastModified, 'd. M. yyyy')} - `}
                      </div>
                      {formatBytes(f.size)}
                    </div>

                    <div className={progressClasses}>
                      <div className="dropzone__file-progress">
                        <Progress
                          percent={props.percent}
                          height="0.5rem"
                          emptyColor={props.progressEmptyColor}
                          fillingColor={props.progressFillingColor}
                        />
                      </div>
                      <p className="dropzone__file-percent">{props.percent}</p>
                    </div>
                  </div>
                </div>
              </DropZoneAcceptedFile>
            ))}

          {!!filesRejected.length &&
            filesRejected.map((f) => (
              <DropZoneRejectedFile key={f.file.name} errorMessage={props.errorMessage}>
                {f.file.name}
              </DropZoneRejectedFile>
            ))}
        </div>
      </div>
    </div>
  );
});
export default DropZone;
