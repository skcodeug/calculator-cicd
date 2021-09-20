FROM node:14

# Calc Directory
WORKDIR /usr/src/calc

# Setup & Install Dependencies
COPY package*.json ./

RUN npm install

# Bundle Calc sourcecode
COPY . .

# Avail the Calc Access Port
EXPOSE 3030

# Run the Calc
CMD [ "node", "index.js" ]