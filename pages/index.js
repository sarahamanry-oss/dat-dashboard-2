import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function Home({ students }) {
  return (
    <div style={{ padding: 40 }}>
      <h1>DAT Dashboard</h1>

      <h2>Students</h2>
      {students.map(s => (
        <div key={s.id}>
          {s.name} — {s.email}
        </div>
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  const { data } = await supabase.from('students').select('*')
  return { props: { students: data || [] } }
}
