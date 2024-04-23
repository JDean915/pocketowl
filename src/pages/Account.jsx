import Disclaimer from "../components/Disclaimer"

function Account() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      {/* Cards */}
      <div className="grid grid-cols-12 gap-6">
        <Disclaimer />
      </div>
    </div>
  );
}

export default Account;