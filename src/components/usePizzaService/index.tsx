import { AxiosError } from 'axios';
import * as React from 'react';
import { SearchService } from '../../services/sizePizza/index';
import { DtoPizza } from '../../services/sizePizza/dtoPizza';
import { DtoStepsResponse } from '../../services/sizePizza/dtoStepsResponse';

export function usePizzaService() {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<DtoStepsResponse<DtoPizza>[]>();
  const [error, setErrors] = React.useState<AxiosError>();
 
  // ---------------------------------------------
  // Functions

  const search = React.useCallback(async () => {
    try {
      setLoading(true);
      const response = await SearchService.searchPizza();
      setData(response);
    } catch (error) {
      setErrors(error as AxiosError);
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    search();
  }, [search]);

  return {
    loading,
    data,
  };
}
