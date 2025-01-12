const Footer: React.FC = () => {
    return (
      <footer className="bg-secondary text-white py-4 sticky bottom-0">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  