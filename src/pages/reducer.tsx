
import useFetchData from "@/hooks/useFetch";
import useFetch from "@/hooks/useFetch";
import { useCallback, useEffect, useReducer, useState } from "react";



const Reducer = () => {
  const {data, error, isLoading} = useFetchData("https://randomuser.me/api/?results=20")

  // state is a object -> state.count
  // dispath is a function similar a setCount
  // const [state, dispatch] = useReducer(reducer, initialState);

  /**
   * useReducer expect 2-3 params
   * - A FUNCTION
   * - INITIAL VALUE
   * - INITIALIZE
   * - Return a new state
   */

  return (
    <>
      <h2>My Hook</h2>
      {isLoading && <div>Carregando...</div>}
      {error && <div>Algo deu errado</div>}
      {data?.results?.map((item: any) => (
        <div key={item.cell}>{item.name.first}</div>
      ))}
    </>
  );
};

export default Reducer;
