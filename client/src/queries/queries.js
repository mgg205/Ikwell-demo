import { gql } from 'apollo-boost';




const getMediaQuery = gql`
    {
        mediaslist {
            id
            title
            image
            description
        }
    }
`;

const getMediaDetails = gql`
    { media(id: $id) {
            id
            title
            image
            
    }
    }
`;





export { getMediaQuery,getMediaDetails };
