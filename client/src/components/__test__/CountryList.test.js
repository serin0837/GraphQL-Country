import React from 'react'
import axios from "axios"
import {render, screen, waitForElementToBeRemoved} from '@testing-library/react'
import CountryList from "../CountryList"



describe("<App />", () => {
    it("Renders <CountryList /> component", async () => {
      const {queryByTitle} = render(<CountryList />);
      const list = queryByTitle("country-list")
      expect(list).toBeTruthy();
    });
  });


