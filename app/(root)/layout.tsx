const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className="flex h-screen">
        Sidebar

        <section className="flex h-full flex-1 flex-col">
            Mobile Navigatation header
            <div className="main-content">{children}</div>
        </section>
    </main>
  )
}

export default Layout