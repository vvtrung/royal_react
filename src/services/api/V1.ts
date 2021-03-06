import axios, {
  AxiosRequestConfig,
  AxiosInstance,
  AxiosError,
  AxiosResponse,
} from 'axios';

import { history } from 'utils/history';
import { LocalStorage, TOKEN_KEY } from '../LocalStorage';

const DEFAULT_API_CONFIG: AxiosRequestConfig = {
  baseURL: `${process.env.REACT_APP_BASE_API}`,
  timeout: 30000,
};

const ERROR_CODES = {
  uncaught: 700,
  unauthenticated: 401,
};

const ERROR_MESSAGES = {
  uncaught: 'some thing went wrong!',
};

export default class V1 {
  client: AxiosInstance;
  localStorage: LocalStorage;

  constructor(config: AxiosRequestConfig = {}) {
    this.client = axios.create({
      ...DEFAULT_API_CONFIG,
      ...config,
    });
    this.localStorage = new LocalStorage();
    this.requestInterceptor();
    this.responseInterceptor();
  }

  private requestInterceptor() {
    this.client.interceptors.request.use((config: AxiosRequestConfig) => {
      const token = this.localStorage.get(TOKEN_KEY);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });
  }

  private responseInterceptor() {
    this.client.interceptors.response.use(
      (res: AxiosResponse) => res,
      (error: AxiosError) => {
        if (!error.response || error.response.status === 500) {
          throw Object.assign({
            error_code: ERROR_CODES.uncaught,
            message: ERROR_MESSAGES.uncaught,
          });
        }
        this.logoutIfUnauthenticated(error);

        throw error.response.data;
      },
    );
  }

  private logoutIfUnauthenticated(error: AxiosError) {
    if (
      error.response &&
      error.response.status === ERROR_CODES.unauthenticated
    ) {
      this.localStorage.remove(TOKEN_KEY);
      history.replace('/login');
    }
  }
}
