export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            {children}
        </div>
    );
}
