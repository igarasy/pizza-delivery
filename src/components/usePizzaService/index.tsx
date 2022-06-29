import { AxiosError } from 'axios';
import * as React from 'react';
import { SearchService } from '../../services/sizePizza';
import { DtoPizza } from '../../services/sizePizza/dtoPizza';

export function useSearchService() {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<DtoPizza[]>();
  const [error, setErrors] = React.useState<AxiosError>();

  // ---------------------------------------------
  // Functions

  const search = React.useCallback(async () => {
    try {
      setErrors(undefined);
      setLoading(true);
      const response = await SearchService.searchPizza();
      setData(response.options);
    } catch (error) {
      setErrors(error as AxiosError);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    data,
    error,
    search,
  };
}
