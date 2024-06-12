import { useState } from "react"

const StateComponent = () => {
  const [msg, setData] = useState('초기값');

  const enter = () => {
    // msg = '이렇게 변경할 꺼야!!!';  // 직접 설정X
    setData('입장했습니다.');
  }
  const exit = () => setData('퇴장했습니다.')

  return (
    <div>
      <h3>{msg}</h3>
      <button onClick={enter}>입장</button>
      <button onClick={exit}>퇴장</button>
    </div>
  )
}
export default StateComponent;