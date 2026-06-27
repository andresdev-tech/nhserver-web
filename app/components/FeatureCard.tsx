interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps): JSX.Element {

  return (
    <div className="bg-[#13161A] p-7">
      <div className="text-2xl mb-4 text-[#7C6AFF]">{icon}</div>
      <h3 className="text-base font-medium mb-2">{title}</h3>
      <p className="text-sm text-[#8892A4] leading-relaxed">{description}</p>
    </div>
  );
}
