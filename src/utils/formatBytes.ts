const formatBytes = (bytes: number, decimals = 0): string => {
  if (bytes === 0) return '0b';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['B', 'kB', 'mB', 'gB', 'tB', 'pB', 'eB', 'zB', 'yB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + sizes[i];
};

export default formatBytes;
