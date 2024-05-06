import axios from "axios";
import { useEffect, useState } from "react";

interface ISentences {
    id?: string,
    sentence: string
}

export const useFetch = (url: string) => {
    const [sentence, setSentence] = useState<ISentences | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>("");

    useEffect(() => {
        const loadingSentence = async () => {
            setLoading(true);
            setError(null);

            const response = (await axios.get(url)).data;
            
            try {
                setSentence(response);
            } catch (e) {
                setError(`Houve um erro: ${e}`);
            }

            setLoading(false);
        }
        
        loadingSentence();
    }, []);

    return {sentence, loading, error};
}