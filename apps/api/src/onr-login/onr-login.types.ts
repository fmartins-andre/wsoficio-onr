import { Client } from 'nestjs-soap';

export interface Login_WSReq {
  SUBJECTCN?: string;
  ISSUERO?: string;
  PUBLICKEY?: string;
  SERIALNUMBER?: string;
  VALIDUNTIL?: string;
  CPF?: string;
  EMAIL?: string;
  IDParceiroWS: number; // obrigatório
}

export interface LoginUsuarioCertificado {
  oRequest?: Login_WSReq;
}

export interface Login_WSResp {
  RETORNO: boolean;
  CODIGOERRO: number;
  ERRODESCRICAO?: string;
  IDUsuario: number;
  IDInstituicao: number;
  Ativo: boolean;
  Tokens?: string[]; // Representado como ArrayOfString no WSDL
}

export interface LoginUsuarioCertificadoResponse {
  LoginUsuarioCertificadoResult?: Login_WSResp;
}

export interface OnrLoginClient extends Client {
  LoginUsuarioCertificadoAsync(
    args: LoginUsuarioCertificado,
  ): Promise<[LoginUsuarioCertificadoResponse, any, any, any]>;
}
