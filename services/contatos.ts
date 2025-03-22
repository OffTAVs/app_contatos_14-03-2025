import { api } from "./api";

export interface Contato {
  _id: string;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
  foto: string;
}

export const getContatos = async () => {
  const response = await api.get<Contato []>("/contatos");
  return response.data;
};

export const addContato = async (contato: Omit<Contato, "_id">) => {
  return await api.post("/contatos", contato);
};

export const deleteContato = async (id: string) => {
  return await api.delete(`/contatos/${id}`);
};

export const updateContato = async(
  id: string,
  contato: Partial<Contato>
) => {
  return await api.put(`/contatos/${id}`, contato);
};

export const getContatosById = async (id: string) => {
  const response = await api.get(`/contatos/${id}`);
  return response.data;
}

