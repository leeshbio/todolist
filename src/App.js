import React, { useRef, useState } from "react"
import main from "./main.css"

function App() {
  const [todoList, setTodoList] = useState([{ title: "리액트 뿌시기", content: "리액트 뿌셔버리겠습니다.", isDone: false }, { title: "아무것도 안하기", content: "아무것도 안하면 마음이 편해집니다..", isDone: true }]);

  const titleRef = useRef();
  const contentRef = useRef();

  const addContents = () => {
    setTodoList([...todoList, {
      title: titleRef.current.value,
      content: contentRef.current.value,
      isDone: false
    }
    ]
    )
  }

  const deleteContents = (index) => {
    const filterArray = todoList.filter((todoItem, todoIndex) => {
      return todoIndex !== index;
    })
    setTodoList(filterArray)
  }

  const checkedContents = (index) => {
    const filterArray = todoList.map((todoItem, arrayIndex) => {
      if (arrayIndex === index) {
        return { ...todoItem, isDone: true }
      } else return todoItem
    })
    setTodoList(filterArray)
    console.log(filterArray)
  }

  const cancelContents = (index) => {
    const filterArray = todoList.map((todoItem, arrayIndex) => {
      //
      if (arrayIndex === index) {
        return { ...todoItem, isDone: false }
      } else return todoItem
    })
    setTodoList(filterArray)
    console.log(filterArray)
  }

  console.log(todoList)

  return (
    <div className="wrap">
      <div className="title">
        <div>My todo List</div>
        <div>react</div>
      </div>
      <div>
        <div className="input_wrap">
          <div className="input_box">
            <div className="input_title">
              <p>제목</p>
              <input type="text" ref={titleRef} className="title_a" />
            </div>
            <div className="input_title">
              <p>내용</p>
              <input type="text" ref={contentRef} className="title_a" />
            </div>
            <button onClick={addContents} className="add_btn">추가하기</button>
          </div>
        </div>
      </div>
      <div className="list" >
        <h2 className="list_title">Working.. 🔥</h2>
        <div className="list_wrap">
          {todoList.map((todo, index) => (
            <>
              {todoList[index].isDone ? ("") : (
                <div className="listdiv">
                  <div className="list_container" key={index}>
                    <div>
                      <h3 className="listTitle">{todo.title}</h3>
                      <p className="listContents">{todo.content}</p>
                    </div>
                    <div className="list_btn">
                      <button className="delete_btn" onClick={() => { deleteContents(index) }}>삭제하기</button>
                      <button className="complete_btn" onClick={() => { checkedContents(index) }}>완료</button>
                    </div>
                  </div>
                </div>)}
            </>

          ))}
        </div>
        <h2 className="list_title">Done..!🎉</h2>
        <div className="list_wrap">
          {todoList.map((todo, index) => (
            <>
              {!todoList[index].isDone ?
                ("") : (
                  <div className="listdiv">
                    <div className="list_container" key={index}>
                      <div>
                        <h3 className="listTitle">{todo.title}</h3>
                        <p className="listContents">{todo.content}</p>
                      </div>
                      <div className="list_btn">
                        <button className="delete_btn" onClick={() => { deleteContents(index) }}>삭제하기</button>
                        <button className="complete_btn" onClick={() => { cancelContents(index) }}>취소</button>
                      </div>
                    </div>
                  </div>
                )}
            </>

          ))}
        </div>
      </div>
    </div>
  )
}

export default App;