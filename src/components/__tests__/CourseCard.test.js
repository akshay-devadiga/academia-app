import { render, screen } from "@testing-library/react";
import CourseCard from "../CourseCard";
import "@testing-library/jest-dom";
const course = {
  id: 1,
  name: "Course 1",
  totalHours: 15,
  thumbnail: "https://randomuser.me/api/portraits/women/37.jpg",
};

test("Should render course card component", () => {
  render(<CourseCard {...course} />);
  const courseElement = screen.getByTestId("course-1");
  expect(courseElement).toBeInTheDocument();
});

test("Should have course title", () => {
  render(<CourseCard {...course} />);
  const titleElement = screen.getByTestId("name");
  expect(titleElement).toBeInTheDocument();
  expect(titleElement).toHaveTextContent(course.name);
});

test('Should have course image', () => {
    render(<CourseCard  {...course}/>);
    const logoElement = screen.getByRole('img');
    expect(logoElement).toHaveAttribute('src', 'https://randomuser.me/api/portraits/women/37.jpg');
    expect(logoElement).toHaveAttribute('alt', 'Course Image');
  });

test("Should have course total hours", () => {
    render(<CourseCard {...course} />);
    const totalHoursElement = screen.getByTestId("totalHours");
    expect(totalHoursElement).toBeInTheDocument();
    expect(totalHoursElement).toHaveTextContent(`${course.totalHours} videos`);
});

test("Should have learn more button", () => {
    render(<CourseCard {...course} />);
    const learnMoreElement = screen.getByTestId("learnmorebtn");
    expect(learnMoreElement).toBeInTheDocument();
    expect(learnMoreElement).toHaveTextContent(`Learn More`);
});
  