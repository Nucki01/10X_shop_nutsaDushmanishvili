import type { LoginFormValues } from '../types/user'

// Validation error object for the Login form (PRD Section P1.2)
export interface LoginFormErrors {
  username?: string
  password?: string
}

// Pure validation function for Login form (PRD Table P1.2 exact error strings):
// - Username: required after trim() -> "Username is required"
// - Password: required -> "Password is required"; min 6 chars -> "Password must be at least 6 characters"
export function validateLoginForm(values: LoginFormValues): LoginFormErrors {
  const errors: LoginFormErrors = {}

  if (!values.username.trim()) {
    errors.username = 'Username is required'
  }

  if (!values.password) {
    errors.password = 'Password is required'
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters'
  }

  return errors
}
