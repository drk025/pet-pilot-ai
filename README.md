

---

# Pet Pilot AI</span> : Personalized ChatBot for Petcare



# Sample Astro

## Introduction
Pet Pilot AI is an intelligent chatbot designed to assist pet owners in providing optimal care for their beloved pets. Whether you're a first-time pet parent or a seasoned caregiver, Pet Pilot AI offers instant advice, answers to common questions, and personalized guidance tailored to the needs of your pets. Built with modern AI technologies, this chatbot aims to simplify pet care and ensure that your furry companions stay healthy and happy.
## Problem Statement

Caring for pets can be challenging, especially when pet owners face uncertainties about their pet's health, nutrition, or behavior. Accessing accurate and timely information often requires consultation with veterinarians or sifting through unreliable sources online. This creates a gap for pet owners seeking quick, credible, and accessible advice.

Pet Pilot AI bridges this gap by providing a user-friendly platform that delivers reliable pet care information, offering support and peace of mind to pet owners at any time.



## Dependencies
- Daytona
- Astro
- Tailwind
- Express JS
- GroqAPI
  

## Getting Started

### Open Using Daytona  

1. **Install Daytona**: Follow the [Daytona installation guide](https://www.daytona.io/docs/installation/installation/).  
2. **Create the Workspace**:  
   ```bash  
   daytona create https://github.com/drk025/pet-pilot-ai
   ```
2. **Make sure that port 4321 is added as the forward port. You may need to manually add port 3000 in your VSCode otherwise backend might not work.**:  
3. **Set up the environment variables by creating a **.env** file inside the backend directory and add your groq api**:
      ```bash  
      GROQ_API_KEY=<YOUR_GROQ_API_KEY>
   ```  
4. **Start the Application**:
- Inside frontend,
   ```bash  
    npm run dev
   ```  
- In backend directory,
 ```bash  
    node server
   ```  

## Usage

#### Visit the frontend application:
Open your browser and navigate to `http://localhost:4321/`.


## Screenshots
![image](https://github.com/user-attachments/assets/a5663013-1498-453e-b85e-29f200cdd768)
![image](https://github.com/user-attachments/assets/5fe4b9c3-8f46-40ec-b295-344dca0e17f3)

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments
- [Astro](https://astro.build/) web frameword
- [Tailwind](https://tailwindcss.com/) for the styling
- [Daytona](https://github.com/daytonaio/daytona) as development environment


---

