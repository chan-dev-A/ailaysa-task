export interface Box{
  id:number,
  title:string
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}
