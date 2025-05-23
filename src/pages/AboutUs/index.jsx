import TeamMemberCard from '../../components/TeamMemberCard';
import { supervisors, teamMembers } from '../../components/TeamData'; 
import Navbar from '../../components/Navbar';

const MeetTheTeam = () => {
  return (
    <>
    <Navbar />
    <section className="py-12 sm:py-16 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Supervisors Section */}
        {supervisors.length > 0 && (
          <div className="mb-12 sm:mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto"> 
              {supervisors.map((member) => (
                <TeamMemberCard key={member.id} {...member} />
              ))}
            </div>
          </div>
        )}

        {/* Team Members Section */}
        {teamMembers.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} {...member} />
            ))}
          </div>
        )}
      </div>
    </section>

    <footer className={`bg-slate-800 text-slate-300 text-center py-10`}>
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} SkillNet. All rights reserved.</p>
          <p className="text-sm text-slate-400 mt-2">
            Building a Smarter Future, Together.
          </p>
        </div>
      </footer>
    </>
  );
};

export default MeetTheTeam;