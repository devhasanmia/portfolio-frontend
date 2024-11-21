'use clint'
const Footer = () => {
  return (
    <div>
        <div className="flex justify-center items-center py-6">
          <p className="text-gray-400 text-sm"> &copy; 2024 - {new Date().getFullYear()} Md. Hasan Mia. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer