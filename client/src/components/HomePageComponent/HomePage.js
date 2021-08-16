import React, { useEffect, useState } from 'react';
import './HomePageStyle.css';
import { QuestionComponent } from '../QuestionComponent/QuestionComponent';

export const HomePage = (props) => {

  useEffect(() => {
    fetchQuestions();
  },[]);

  const [questions, setQuestions] = useState([]);

  const fetchQuestions = async () => {
    const data = await fetch(
      'http://localhost:5000/questions'
    );

    const questions = await data.json();
    console.log(questions);
    setQuestions(questions)
  }

  const handleSearching = (e) => {
    console.log(e.target.value);
    setQuestions(questions.filter(item => {
      return item.question_title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    }))   
  }

  const resetQuesitons = () => {
    document.getElementById("searchText").value="";
    fetchQuestions();
  }
    return(
        <div className="homeContainer">
          <div className="exploreContainer">
            <h1>Search For Questions </h1>
      <div className="search">
      <input 
      type="text" 
      id="searchText"
      className="searchTerm" 
      placeholder="What are you looking for?"
      onChange={handleSearching}
       />
       <button id="clearSearch" onClick={resetQuesitons}> Clear Search Results</button>
   </div>
      
          </div>
          <div className="questions">

          {
            questions.map(question => (
              <QuestionComponent questionTitle={question.question_title} questionBody={question.description} key={question.question_id}/>
            ))
            
          }
          </div>
        </div>
    )
}