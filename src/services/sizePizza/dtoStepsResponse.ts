export interface DtoStepsResponse<Tdata> {
  id: string;
  name: string;
  description: string;
  options: Tdata[];
}
