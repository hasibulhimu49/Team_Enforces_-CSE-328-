import React, { useEffect } from 'react';


// 9wiYOY6BIepsUoiQtC3Zg
// PcZrUB7CB5T8wuFgHbR0J

const Chatbot = () => {
  useEffect(() => {
    // Adding the Chatbase chatbot script dynamically
    const script = document.createElement('script');
    script.src = "https://www.chatbase.co/embed.min.js";
    script.async = true;
    script.defer = true;
    script.setAttribute("chatbotId", "PcZrUB7CB5T8wuFgHbR0J");
    script.setAttribute("domain", "www.chatbase.co");

    // Embedded configuration
    const configScript = document.createElement('script');
    configScript.text = `
      window.embeddedChatbotConfig = {
        chatbotId: "PcZrUB7CB5T8wuFgHbR0J",
        domain: "www.chatbase.co"
      };
    `;

    // Append the scripts to the body
    document.body.appendChild(configScript);
    document.body.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(configScript);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div >
     
    
    </div>
  );
};

export default Chatbot;
