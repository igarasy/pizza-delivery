import axios from 'axios';
import { DtoStepsResponse } from './dtoStepsResponse';
import { DtoPizza } from './dtoPizza';

export class SearchService {
  static async searchPizza() {
    const url = `https://pizza-stoom-api.herokuapp.com/steps-create-pizza`;
    const response = await axios.get<DtoStepsResponse<DtoPizza>[]>(url);
    return response.data;
  }
}
