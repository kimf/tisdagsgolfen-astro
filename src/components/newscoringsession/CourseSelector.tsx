import type { Course } from 'src/db/schema/course';
import Radio from './Radio';

interface Props {
  courseId: number | undefined;
  courses: Course[];
  onChange: (courseId: number) => void;
}

export default function Label({ courseId, courses, onChange }: Props) {
  return (
    <>
      <h2>Bana</h2>
      <div class="flex gap-4 flex-wrap">
        {courses.map((course) => (
          <Radio
            checked={courseId === course.id}
            onChange={onChange}
            name="course"
            label={course.name}
            value={course.id}
          />
        ))}
      </div>
    </>
  );
}
