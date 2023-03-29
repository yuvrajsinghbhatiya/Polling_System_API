# POLLING SYSTEM API

Welcome to the Polling System API! With this API, you can easily create, view, and manage polls with multiple options. You can create questions, add options, delete questions and options, and even add votes to your preferred option.


## Requirements

- Install [Node.js](https://nodejs.org/en/)
- Install [MongoDB](https://docs.mongodb.com/manual/installation/)
- Install [Postman](https://www.postman.com/downloads/) or use any other api testing tool("VS CODE THUNDERCLIENT")

## Getting Started  ##

# Clone the repository
```
git clone <repo url> <project_name>
```

# Install dependencies
```
npm install
```

# Open "config/mongoose.js" and add MongoDB URI, local or Atlas

- Build and run the project
```
npm start
```

# Navigate to `http://localhost:8000/`

## Endpoints

*	/questions/create  (To create a question)
*	/questions/:questionId/options/create  (To add options to a specific question)
*	/questions/:questionId/delete (To delete a question)
*	/options/:optionId/delete (To delete an option)
*	/options/:optionsId/add_vote (To increment the count of votes)
*	/questions/:questionId (To view a question and it’s options)
*   /questions/ (To list down all the questions)

