import React from 'react'
import axios from "axios"
import {render, screen, waitForElementToBeRemoved} from '@testing-library/react'
import {CountryList} from "../CountryList"



describe("<App />", () => {
    it("Renders <CountryList /> component", async () => {
      render(<CountryList />);
      await waitForElementToBeRemoved(() => screen.getByText(/Fetching countries/i));
  
      expect(axios.get).toHaveBeenCalledTimes(1);
    });
  });


