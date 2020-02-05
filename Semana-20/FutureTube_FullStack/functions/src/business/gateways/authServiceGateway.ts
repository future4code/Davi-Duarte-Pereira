
export interface AuthServiceGateway {
  signUp(email: string, password: string): Promise<any>
}

