// src/types/user.ts
// Domain models for local Authentication and Login form (PRD Section A1.5 & P1).
// Note: Login in CORE is a local React Context simulation (no external auth API).

export interface AuthUser {
  username: string
  isLoggedIn: boolean
}

export interface LoginFormValues {
  username: string
  password: string
}
