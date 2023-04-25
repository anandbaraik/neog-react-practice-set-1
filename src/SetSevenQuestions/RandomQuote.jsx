import { useState, useEffect } from "react";

import { fetchQuote } from "./API/fetchQuote";

export default () => {
  const [quote, setQuote] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const fetchRandomQuote = async () => {
    try {
        setIsDisabled(true);
        const response = await fetchQuote();
        setQuote(response);
        setIsDisabled(false);
    } catch (error) {
        console.error(error);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const fetchNewQuote = async function () {
    fetchRandomQuote();
  };

  return (
    <div>
      {!quote ? (
        <h1>Loading....</h1>
      ) : (
        <div>
          <h1>Quotes</h1>
          <p>"{quote.content}"</p>
          <p>-{quote.author}</p>
          <button onClick={fetchNewQuote} disabled={isDisabled}>
            New Quote
          </button>
        </div>
      )}
    </div>
  );
};
