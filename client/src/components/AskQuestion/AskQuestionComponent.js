import React, { useState, useEffect } from 'react';
import './AskQuestionStyle.css';
let idArr = [];
export const AskQuestion = (props) => {

  useEffect(() => {
    fetchTags();
  },[]);

    //Description for tags
    const [Tags, setTags] = useState([]);

    //Description for question
    const [question_title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTag] = useState('');


    const fetchTags = async () => {
      const data = await fetch(
        'http://localhost:5000/tags'
      );
  
      const Tags = await data.json();
      // console.log(Tags);
      setTags(Tags);
    }

    const gettingTags = (e) => {
      
      let index = parseInt(e.target.index);
      if(!idArr.includes(index+1)){
        idArr.push(index+1);
      }
      // console.log(idArr);
      let newTag = '{'+idArr+ '}';
        setTag(newTag);
      
    }

    const onSubmitForm = async e => {
      e.preventDefault();
      try {
        const body = {question_title, description, tags};
        // console.log(body);
        const response = await fetch("http://localhost:5000/addQuestion", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(body)
        });
        console.log(response);
        // console.log(body);
        window.location = "/";
      } catch (err) {
        console.log(err.message);
      }
    }

    return(
        <form onSubmit={onSubmitForm}>
        <div className="container">
          <h1>Ask Your Question Here</h1>
          <hr/>
      
          <label htmlFor="email"><b>Title</b></label>
          <input type="text" 
            placeholder="Enter Question Title Here" 
            name="title" id="title" required 
            onChange={(e) => setTitle(e.target.value)}
            />
      
          <label htmlFor="questiontag"><b>Select Question Tag(s)</b></label>
          <br />

          <select id="multipleSelect" multiple>
            {
              Tags.map(element => (
                <option id={element.tag_id} onClick={gettingTags} key={element.tag_id} name={element.tag_name}> {element.tag_name}</option>
              ))
              }

          </select>
          <br />
          <br />


          <label htmlFor="question"><b>Question Description</b></label>
          <textarea 
          id="w3review" 
          name="w3review" 
          rows="10"
          required
          onChange={(e) => setDescription(e.target.value)}
          cols="62">

          </textarea>
      
          <hr />
      
          <button type="submit" className="registerbtn">Submit Question</button>
        </div>
        
      </form>
    )
}