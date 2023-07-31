Rest API design spec

1. **Get a Random Stoic Quote**

   - Endpoint: `GET /quotes/random`
   - Description: Retrieve a random Stoic quote from the collection.
   - Response: JSON object with the quote and its author.

2. **Get All Stoic Quotes**

   - Endpoint: `GET /quotes`
   - Description: Retrieve all Stoic quotes available in the collection.
   - Response: JSON array containing all quotes with their respective authors.

3. **Get a Specific Stoic Quote by ID**

   - Endpoint: `GET /quotes/{id}`
   - Description: Retrieve a specific Stoic quote by its unique identifier.
   - Parameters:
     - `{id}`: The unique identifier of the quote.
   - Response: JSON object with the quote and its author if found, or an error message if not found.

4. **Get All Stoic Authors**

   - Endpoint: `GET /authors`
   - Description: Retrieve a list of all Stoic authors available in the collection.
   - Response: JSON array containing the names of all authors.

5. **Get All Quotes by a Specific Stoic Author**

   - Endpoint: `GET /authors/{author_id}/quotes`
   - Description: Retrieve all quotes by a specific Stoic author.
   - Parameters:
     - `{author_id}`: The unique identifier or name of the author.
   - Response: JSON array containing all quotes by the specified author if found, or an error message if not found.

6. **Add a New Stoic Quote**

   - Endpoint: `POST /quotes`
   - Description: Add a new Stoic quote to the collection.
   - Request Body: JSON object with the quote text and author's name.
     ```json
     {
       "text": "The happiness of your life depends upon the quality of your thoughts.",
       "author": "Marcus Aurelius"
     }
     ```
   - Response: JSON object with the newly added quote and its generated ID.

7. **Update a Stoic Quote**

   - Endpoint: `PUT /quotes/{id}`
   - Description: Update the text or author of an existing Stoic quote.
   - Parameters:
     - `{id}`: The unique identifier of the quote to be updated.
   - Request Body: JSON object with the updated quote text and/or author's name.
     ```json
     {
       "text": "The happiness of your life depends upon the quality of your thoughts.",
       "author": "Marcus Aurelius"
     }
     ```
   - Response: JSON object with the updated quote details if successful, or an error message if the quote with the given ID was not found.

8. **Delete a Stoic Quote**
   - Endpoint: `DELETE /quotes/{id}`
   - Description: Delete a Stoic quote from the collection.
   - Parameters:
     - `{id}`: The unique identifier of the quote to be deleted.
   - Response: JSON object with a success message if the deletion is successful, or an error message if the quote with the given ID was not found.

Database design spec

1. **Table: quotes**

   - Columns:
     - `id` (Primary Key): Unique identifier for the quote.
     - `text`: The text of the Stoic quote.
     - `author_id` (Foreign Key): References the unique identifier of the author who said the quote.

2. **Table: authors**
   - Columns:
     - `id` (Primary Key): Unique identifier for the author.
     - `name`: The name of the Stoic author.

# Front End spec

use the features of the rest api and the ability to share a quote dynamic url and SEO to go with it

example:

quote - live each day as if it where your last - Marcus 

SEO - thumbnail of Marcus, quote om top - and in description og
