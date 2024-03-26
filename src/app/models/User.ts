interface UserRegistrationDto {
  email: string,
  password:string,
}

interface UserAuthenticationDto {
  email: string,
  password:string,
}

interface UserAuthenticationResponseDto {
  tokenType: string,
  accessToken : string,
  expiresIn: number,
  refreshToken:string,
}

export {
  UserRegistrationDto,
  UserAuthenticationDto,
  UserAuthenticationResponseDto
}
