import {
  AdContentWrapper,
  AdUsersHeader,
  FilterWrapper,
  PaginationContainer,
} from "@/components";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, Pencil, Trash2 } from "lucide-react";

const AdUsers = () => {
  return (
    <AdContentWrapper>
      <AdUsersHeader />
      <FilterWrapper>Filters</FilterWrapper>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Sl. No.</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Mobile</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Joined At</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 10 }, (_, index) => {
            return (
              <TableRow key={index + 1}>
                <TableCell>{index + 1}.</TableCell>
                <TableCell>AA</TableCell>
                <TableCell>AA</TableCell>
                <TableCell>AA</TableCell>
                <TableCell>AA</TableCell>
                <TableCell>AA</TableCell>
                <TableCell className="flex flex-row justify-end items-center gap-6">
                  <Eye size={18} />
                  <Pencil size={18} />
                  <Trash2 size={18} className="text-red-500" />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <PaginationContainer />
    </AdContentWrapper>
  );
};
export default AdUsers;
