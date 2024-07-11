import { useState, useEffect } from "react";
import axios from "axios";
import {RAPID_API_KEY} from '@env';

const rapidApiKey = RAPID_API_KEY;

const useFetch = ({endpoint, query}) =>{
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);


   const options = {
	method: 'GET',
   url: `https://jsearch.p.rapidapi.com/${endpoint}`,
	hostname: 'jsearch.p.rapidapi.com',
   headers:{
		'x-rapidapi-key': rapidApiKey,
		'x-rapidapi-host': 'jsearch.p.rapidapi.com'
	},
   params: {...query},
};
}