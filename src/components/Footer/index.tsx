const Footer: React.FC = () => {
    return (
      <footer className="bg-secondary text-white py-4 mt-4 fixed bottom-0 w-full">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  