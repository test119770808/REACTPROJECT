import { createContext } from "react";


// 컨텍스트의 기본 상태 지정
const ColorContext = createContext({color: 'red'});

export default ColorContext; // 외부에서 사용(export)