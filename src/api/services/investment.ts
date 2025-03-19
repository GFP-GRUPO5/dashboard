import axios from "axios";
import { BASE_URL } from "../api";

export const getInvestments = async () => {
  try{
    const response = await axios.get(`${BASE_URL}/investments`)
    return response.data;
  } catch(error){
    throw new Error ("Falha ao acessar os investimentos")
  }
};

export const updateInvestment = async (type:string, value:number) => {
  try{
    const response = await axios.put(`${BASE_URL}/investments/${type}`, {value})
    return response.data;
  }catch (error){
    throw new Error ("Falha ao atualizar o investimento")
  }
}