import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import AvatarCircle from './AvatarCircle';

describe('AvatarCircle', () => {
  test('One word company', () => {
    render(<AvatarCircle fullName="Firma s.r.o." isCompany />);
    expect(screen.getByRole('button')).toHaveTextContent('FI');
  });

  test('Two word company', () => {
    render(<AvatarCircle fullName="Testovacia Firma a.s." isCompany />);
    expect(screen.getByRole('button')).toHaveTextContent('TF');
  });

  test('Long company name', () => {
    render(<AvatarCircle fullName="Testovacia Firma Janka Tisiceho a.s." isCompany />);
    expect(screen.getByRole('button')).toHaveTextContent('TF');
  });

  test('First name and last name as full name', () => {
    render(<AvatarCircle fullName="Janko Tisici" />);
    expect(screen.getByRole('button')).toHaveTextContent('JT');
  });

  test('First name and last name separated', () => {
    render(<AvatarCircle firstName="Janko" lastName="Tisici" />);
    expect(screen.getByRole('button')).toHaveTextContent('JT');
  });

  test('Long name', () => {
    render(<AvatarCircle fullName="Ing. Janko Alfonz Albert Desattisici DrSc. MBA." />);
    expect(screen.getByRole('button')).toHaveTextContent('JD');
  });

  test('No last name', () => {
    render(<AvatarCircle firstName="Janko" />);
    expect(screen.getByRole('button')).toHaveTextContent('JA');
  });

  test('No first name', () => {
    render(<AvatarCircle lastName="Tisici" />);
    expect(screen.getByRole('button')).toHaveTextContent('TI');
  });

  test('No name at all', () => {
    render(<AvatarCircle />);
    expect(screen.getByRole('button')).toHaveTextContent('');
  });

  test('Shows name correctly', () => {
    render(<AvatarCircle firstName="Janko" lastName="Tisici" showName />);
    expect(screen.getByText('Janko Tisici')).toBeDefined();
  });

  test('Shows full name correctly', () => {
    render(
      <AvatarCircle
        firstName="Janko"
        lastName="Tisici"
        fullName="Ing. Janko Tisici DrSc."
        showFullName
      />
    );
    expect(screen.getByText('Ing. Janko Tisici DrSc.')).toBeDefined();
  });

  test('calls the onClick function when clicked', () => {
    const mockAvatarClick = jest.fn();
    render(<AvatarCircle fullName="Test Testovaci" onClick={mockAvatarClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(mockAvatarClick).toHaveBeenCalled();
  });
});
