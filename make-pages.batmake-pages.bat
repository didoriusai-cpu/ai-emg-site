@echo off
setlocal
for %%%%D in (ai-lab ai-radio artist community contact events sound-creation sound-lab store upload videos) do (
  if not exist "app\%%%%D\page.tsx" (
    if not exist "app\%%%%D" mkdir "app\%%%%D"
    > "app\%%%%D\page.tsx" (
      echo import Nav from "../../components/Nav";
      echo.
      echo export default function Page() {
      echo   return (
      echo     <main className="min-h-screen bg-grid">
      echo       <Nav />
      echo       <section className="mx-auto max-w-6xl px-4 py-16">
      echo         <div className="glass p-10">
      echo           <h1 className="text-4xl font-semibold tracking-tight">%%%%D</h1>
      echo           <p className="mt-4 text-white/80">Coming soon.</p>
      echo         </div>
      echo       </section>
      echo     </main>
      echo   );
      echo }
    )
  )
)
echo Done.
endlocal
