import React, { useEffect } from 'react';

const VoiceflowChat = () => {
  useEffect(() => {
    // Dynamically load the Voiceflow widget script
    const script = document.createElement('script');
    script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
    script.type = 'text/javascript';

    script.onload = () => {
      // Once the script is loaded, initialize the Voiceflow chat widget
      window.voiceflow.chat.load({
        verify: { projectID: '67a703fe0fe6c98cd39c955a' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production'
      });
      applyCustomStyles();
    };

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const applyCustomStyles = () => {
    // Ensure the elements exist before trying to style them
    const styleInterval = setInterval(() => {
      const element1 = document.querySelector('._1bvgnii9');
      const element2 = document.querySelector('._1emja3f0 ._1emja3f9');

      if (element1 && element2) {
        clearInterval(styleInterval); // Stop checking once elements are found

        // Apply styles to the first element
        element1.style.textTransform = 'capitalize';
        element1.style.fontFamily = 'sans-serif';
        element1.style.letterSpacing = '0.02em';
        element1.style.fontSize = '1rem';

        // Apply styles to the second element
        element2.style.bottom = '410px';
        element2.style.right = '20px';
      }
    }, 100); // Check every 100ms until the elements are found
  };

  return (
    <div>
      {/* You can add an optional element for styling or customization */}
      <div id="voiceflow-chat-container"></div>
    </div>
  );
};

export default VoiceflowChat;
