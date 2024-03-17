import axios, { AxiosRequestConfig } from 'axios'
import { API_URL, API_KEY } from './config'

export const getReq = async <T>(url: string, config?: AxiosRequestConfig) =>
  await axios.get<T>(`${API_URL}${url}&appid=${API_KEY}`, config)
