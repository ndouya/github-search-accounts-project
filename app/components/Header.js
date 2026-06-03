export default function Header({ title })  {
    return (
        <div className="bg-gray-800  text-white p-4 rounded-lg mb-4">
            <h2 className="text-2xl font-bold">{title}</h2>
        </div>
    );
}