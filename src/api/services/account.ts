import axios from "axios";
import { BASE_URL } from "../api";

export const getAccount = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/account`);
    return response.data;
  } catch (error) {
    console.error("Erro ao carregar conta:", error);
    throw error;
  }
};

export const updateAccount = async (account: {
  fullName: string;
  firstName: string;
  balance: number;
  currency: string;
}) => {
  try {
    await axios.put(`${BASE_URL}/account`, account);
  } catch (error) {
    console.error("Erro ao atualizar conta:", error);
    throw error;
  }
};
