export class ResponseObject<T> {
  message: string;
  code: number;
  data: T;
}
