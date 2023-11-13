import './App.css';
import AWS from 'aws-sdk';

AWS.config.update({
  region: "ap-south-1",
  credentials: {
    accessKeyId: "AKIAZ74SQQO2USBLSBFN",
    secretAccessKey: "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",
  },
});

const downloadFile = () => {
  const s3 = new AWS.S3();
  const params = {
    Bucket: 'devboot',
    Key: 'devboot',
  };

  s3.getObject(params, (err, data) => {
    if (err) {
      console.error('Error downloading file', err);
    } else {
      // 'data.Body' contains the file content
      console.log('File downloaded successfully', data);
    }
  });
};

function App() {
  return (
    <div >
      <h1 className='Heading'>Welcome to DevBoot</h1>
      <h2>Overview</h2>
      <p>
        DevBoot is a versatile command-line tool designed to simplify the process of creating the initial structure for your projects in different programming languages. Whether you're starting a new web application, API, or command-line tool, DevBoot has got you covered.
      </p>

      <h2>Features: </h2>
      <ul>
        <li className='Features'>
          <b>Multi-language Support: </b>
          DevBoot supports a variety of programming languages, allowing you to kickstart projects in languages such as Python, JavaScript, Java, Go, and more.
        </li>
        <li className='Features'>
          <b>Customizable Templates: </b>
          Choose from a collection of project templates tailored to different use cases. From simple hello-world applications to full-stack web projects, DevBoot provides templates to suit your needs.
        </li>
        <li className='Features'>
          <b>Effortless Setup: </b>
          DevBoot automates the project setup process, reducing the time and effort required to create a basic project structure. Say goodbye to repetitive boilerplate code!
        </li>
        <li className='Features'>
          <b>Extensible: </b>
          Easily extend DevBoot by creating and sharing your templates. Contribute to the community or customize templates for your team's specific requirements.
        </li>
      </ul>

      <h2>Supported Languanges : </h2>
      <ul>
        <li>
          Go
        </li>
        <li>
          JavaScript
        </li>
      </ul>

      <h2>Installation : </h2>
      <div>
        <button onClick={downloadFile}>Download DevBoot</button>
      </div>

    </div>
  );
}

export default App;
