// 반복적인 input을 관리하는 코드를 훅으로... 
import React, { useCallback, useState } from "react";

function useInputs(initialForm) {
  //useState
  const [form, setForm] = useState(initialForm);
  // change
  const onChange = useCallback(e => {
    const {name, value} = e.target;
    setForm(form => ({...form, [name]: value}));
  },[])
  // form 값을 초기화
  const reset = useCallback(() => setForm(initialForm), [initialForm])
  return [form, onChange, reset];
}

export default useInputs;