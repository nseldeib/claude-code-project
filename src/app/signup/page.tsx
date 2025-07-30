import AuthForm from '@/components/AuthForm'

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-md mx-auto">
        <AuthForm type="signup" />
      </div>
    </div>
  )
}