export interface AppError {
  message: string;
  status: number;
  originalError: any;
  errors?: {
    [key: string]: string[];
  };
}   